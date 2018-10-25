import Vue from "vue";

export interface GetRopesI {
  auth: {
    token: string;
  };
}

export interface GetRope {
  auth: { token: string };
  serial: string;
}

class ApiService {

  public async getOrganization(): Promise<string> {
    return await this.get(`/get_organization`);
  }

  public async getAllOrganizations(): Promise<any> {
    return await this.get(`/get_parties`);
  }

  public async getValidCableOperationTypes(): Promise<any> {
    return await this.get(`/get_valid_cable_operation_types`);
  }

  public async getRopes(data: GetRopesI): Promise<any> {
    return await this.post(`/get_cables`, data);
  }

  public async getRopesBySerialId(data: GetRope): Promise<any> {
    return await this.post(`/get_cables`, data);
  }

  public async createRope(data: any) {
    return await this.post(`/cable_create`, data);
  }

  public async createOperation(data: any): Promise<any> {
    return await this.post(`/cable_operation_create`, data);
  }

  public async setCableEnterInWork(data: any) {
    return await this.post(`/cable_enter_in_work`, data);
  }

  public async cableOperationCreate(data: any) {
    return await this.post(`/cable_operation_create`, data);
  }

  public async cableOperationConfirm(data: any) {
    return await this.post(`/cable_operation_confirm`, data);
  }

  private async get(url: string) {
    const response = await Vue.$http.get(url);
    return response.data;
  }

  private async post(url: string, args: any) {
    const response = await Vue.$http.post(url, args);
    return response.data;
  }
}

export const apiService = new ApiService();
